FROM golang:latest AS builder
WORKDIR /app
COPY go.mod go.sum ./

COPY . .

RUN go build -o main .

FROM debian:latest

COPY --from=builder /app/main /app/main
EXPOSE 8080

CMD ["app/main"]
