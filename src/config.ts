import { ProcessorConfig } from './types/custom/processorConfig'
import { lookupArchive } from '@subsquid/archive-registry'

const config: ProcessorConfig = {
    chainName: 'kilt',
    prefix: 'kilt',
    dataSource: {
        archive: lookupArchive('kilt')[0].url,
        chain: 'wss://spiritnet.kilt.io/',
    },
    typesBundle: 'kilt',
    batchSize: 100,
    // blockRange: {
    //     from: 7828270,
    // },
}

export default config
