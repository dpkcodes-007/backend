import jwt from 'jsonwebtoken'

const middleware = (req, res, next) => {
    try {
        const headersauth = req.headers.authorization

        if (!headersauth) {
            return res.status(401).json({ msg: "auth headers is missing" })
        }

        const authtoken = headersauth.spilt(' ')[1]

        if (!authtoken) {
            return res.status(401).json({ msg: "auth token is missing" })
        }

        const jwtdecode = jwt.verify(authtoken, process.env.REFRESH_SECRET_WEAPON)

        req.user = jwtdecode

        next()

    } catch (error) {
        res.status(500).json({ msg: "error", error })
    }
}