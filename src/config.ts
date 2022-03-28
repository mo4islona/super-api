import { ProcessorConfig } from './types/custom/processorConfig'
import { lookupArchive } from '@subsquid/archive-registry'

const config: ProcessorConfig = {
    chainName: 'bifrost',
    prefix: 'bifrost',
    dataSource: {
        archive: lookupArchive('bifrost')[0].url,
        chain: 'wss://bifrost-parachain.api.onfinality.io/public-ws',
    },
    typesBundle: 'bifrost',
    batchSize: 100,
    // blockRange: {
    //     from: 7828270,
    // },
}

export default config
