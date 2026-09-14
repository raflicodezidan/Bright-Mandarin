import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const secret = req.headers.get('x-sanity-secret') || req.nextUrl.searchParams.get('secret');

    if (process.env.SANITY_WEBHOOK_SECRET && secret !== process.env.SANITY_WEBHOOK_SECRET) {
      return NextResponse.json({ message: 'Invalid secret token' }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const type = body?._type;

    // Trigger revalidation based on changed document type
    if (type === 'program') {
      revalidatePath('/program');
      revalidatePath('/');
    } else if (type === 'pengajar') {
      revalidatePath('/pengajar');
      revalidatePath('/');
    } else if (type === 'berita') {
      revalidatePath('/berita');
      if (body?.slug?.current) {
        revalidatePath(`/berita/${body.slug.current}`);
      }
      revalidatePath('/');
    } else if (type === 'galeri') {
      revalidatePath('/galeri');
      revalidatePath('/');
    } else if (type === 'siteSettings') {
      revalidatePath('/', 'layout');
    } else {
      // Revalidate everything if general update
      revalidatePath('/', 'layout');
    }

    return NextResponse.json({
      revalidated: true,
      type: type || 'all',
      now: Date.now(),
    });
  } catch (err: any) {
    return NextResponse.json({ message: 'Error revalidating', error: err.message }, { status: 500 });
  }
}
