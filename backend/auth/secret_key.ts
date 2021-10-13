export default function secretKey() {
    return {
        secretKey: "SECRET-KEY",
        option: {
            alogrithm: "HS256",
            expiresIn: "30m",
            issuer: "J25A"
        }
    }
}