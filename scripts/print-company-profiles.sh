#!/usr/bin/env bash
set -euo pipefail
ROOT="/workspace/public/company-profile"
CHROME="${CHROME:-google-chrome}"

print_pdf() {
  local html="$1"
  local pdf="$2"
  local tmp
  tmp="$(mktemp -d /tmp/xtrafriq-chrome-XXXXXX)"
  echo "Printing $(basename "$html") -> $(basename "$pdf")"
  timeout 35 "$CHROME" \
    --headless=new \
    --no-sandbox \
    --disable-gpu \
    --disable-dev-shm-usage \
    --allow-file-access-from-files \
    --user-data-dir="$tmp" \
    --no-pdf-header-footer \
    --print-to-pdf="$pdf" \
    "file://${html}" \
    >/tmp/chrome-pdf.log 2>&1 || true
  rm -rf "$tmp"
  if [[ ! -s "$pdf" ]]; then
    echo "Failed to create $pdf" >&2
    tail -30 /tmp/chrome-pdf.log >&2
    exit 1
  fi
  echo "Wrote $pdf ($(wc -c < "$pdf") bytes)"
}

print_pdf "$ROOT/xtrafriq-one-page-company-profile.html" "$ROOT/xtrafriq-one-page-company-profile.pdf"
print_pdf "$ROOT/xtrafriq-capability-statement.html" "$ROOT/xtrafriq-capability-statement.pdf"
print_pdf "$ROOT/xtrafriq-corporate-company-profile.html" "$ROOT/xtrafriq-corporate-company-profile.pdf"
