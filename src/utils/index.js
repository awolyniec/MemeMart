export const pathToPublicFile = pathInsidePublicDirectory => process.env.PUBLIC_URL + pathInsidePublicDirectory

export const displayPrice = cents => '$' + (cents / 100).toFixed(2)