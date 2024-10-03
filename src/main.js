
import { web } from "./application/web.js"
import { logger } from "./application/logging.js"

const PORT = process.env.PORT || 8000

web.listen(PORT, () => {
    logger.info("info: everything is normal")
})