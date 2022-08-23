Add the `allowed_origins` to your instance via Clerk Backend API:

```
curl -X PATCH https://api.clerk.dev/v1/instance \
-H "Authorization: Bearer backend_key_goes_here" \
-H "Content-type: application/json" \
-d '{"experimental_allowed_origins": ["chrome-extension://bhhbcalfncfbbneepfjhobimnfghoacb"]}'
```
