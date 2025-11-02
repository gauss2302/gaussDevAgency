#!/bin/sh
set -e

HTTPS_CONF="/etc/nginx/conf.d/gaussdev.https.conf"
HTTP_CONF="/etc/nginx/conf.d/gaussdev.http.conf"
ACTIVE_CONF="/etc/nginx/conf.d/gaussdev.conf"

CERT_PATH="${SSL_CERT_PATH:-/etc/ssl/gaussdev/gaussdev_com.fullchain.crt}"
KEY_PATH="${SSL_KEY_PATH:-/etc/ssl/gaussdev/gaussdev.com.key}"
ALLOW_HTTP_FALLBACK="${ALLOW_HTTP_FALLBACK:-false}"

cert_exists() {
  [ -f "$CERT_PATH" ] && [ -f "$KEY_PATH" ]
}

if cert_exists; then
  echo "nginx: detected TLS certificates, enabling HTTPS config."
  cp "$HTTPS_CONF" "$ACTIVE_CONF"
else
  if [ "$ALLOW_HTTP_FALLBACK" = "true" ]; then
    echo "nginx: TLS certificates not found; using HTTP fallback config."
    cp "$HTTP_CONF" "$ACTIVE_CONF"
  else
    echo "nginx: ERROR - TLS certificate files are missing."
    echo "  expected certificate: $CERT_PATH"
    echo "  expected key:         $KEY_PATH"
    echo "Set ALLOW_HTTP_FALLBACK=true to serve HTTP while certificates are absent."
    exit 1
  fi
fi
