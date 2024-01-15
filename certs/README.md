```
# Generate CA private key
openssl genpkey -algorithm RSA -out ca-private-key.pem

# Generate CA certificate
openssl req -x509 -new -key ca-private-key.pem -out ca-certificate.pem

# Generate server private key
openssl genpkey -algorithm RSA -out server-private-key.pem

# Generate server certificate signing request
openssl req -new -key server-private-key.pem -out server-certificate.csr

# Sign the server certificate with the CA
openssl x509 -req -in server-certificate.csr -CA ca-certificate.pem -CAkey ca-private-key.pem -out server-certificate.pem

# Generate client private key
openssl genpkey -algorithm RSA -out client-private-key.pem

# Generate client certificate signing request
openssl req -new -key client-private-key.pem -out client-certificate.csr

# Sign the client certificate with the CA
openssl x509 -req -in client-certificate.csr -CA ca-certificate.pem -CAkey ca-private-key.pem -out client-certificate.pem


```
