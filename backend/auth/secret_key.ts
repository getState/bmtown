export default function secretKey() {
    return {
        secretKey: process.env.JWT_SECRET,
        option: {
            expiresIn: "30m",
            issuer: "J25A"
        }
    }
}