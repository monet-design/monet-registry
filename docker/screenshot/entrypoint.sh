#!/bin/bash
set -e

echo "=== Step 4: Starting production server ==="
pnpm start &
SERVER_PID=$!

echo "=== Step 5: Waiting for server ==="
npx wait-on http://localhost:3000 -t 60000

echo "=== Step 6: Capturing screenshots ==="
pnpm screenshot:capture "$@"
CAPTURE_EXIT_CODE=$?

echo "=== Cleanup: Stopping server ==="
kill $SERVER_PID 2>/dev/null || true

exit $CAPTURE_EXIT_CODE
