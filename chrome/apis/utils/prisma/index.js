// Packages
import { PrismaClient } from '@prisma/client'

/** @type {PrismaClient} */

let prisma

if (process.env.ENV === 'prd') prisma = new PrismaClient()
// Development
else {
	if (!global.prisma) global.prisma = new PrismaClient()

	prisma = global.prisma
}

export default prisma
