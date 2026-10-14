Get-ChildItem -Recurse -Include *.tsx,*.css,*.ts -Path 'app' | ForEach-Object {
    $file = $_.FullName
    $content = Get-Content $file -Raw
    $newContent = $content -replace '#FFF8E6', '#FFFEF8'
    if ($content -ne $newContent) {
        Set-Content -Path $file -Value $newContent -NoNewline
        Write-Host "Updated: $file"
    }
}
Write-Host "Done!"
