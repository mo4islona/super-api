import { ProcessorConfig } from './types/custom/processorConfig'
import { lookupArchive } from '@subsquid/archive-registry'

const config: ProcessorConfig = {
    chainName: 'khala',
    prefix: 'phala',
    dataSource: {
        archive: lookupArchive('khala')[0].url,
        chain: 'wss://khala.api.onfinality.io/public-ws',
    },
    typesBundle: 'khala',
    batchSize: 100,
    // blockRange: {
    //     from: 7828270,
    // },
}

export default config
