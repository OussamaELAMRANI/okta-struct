import path from 'path'
import {defineConfig} from 'vite'

const resolve = (file: any) => path.resolve(__dirname, file)

export default defineConfig({
    resolve: {
        alias: [
            {
                find: /^@\/(.*)/,
                replacement: resolve('./src/$1')
            }
        ]
    },
})
