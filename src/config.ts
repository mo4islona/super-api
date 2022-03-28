import { ProcessorConfig } from './types/custom/processorConfig'
import { lookupArchive } from '@subsquid/archive-registry'

const config: ProcessorConfig = {
    chainName: 'calamari',
    prefix: 'calamari',
    dataSource: {
        archive: lookupArchive('calamari')[0].url,
        chain: 'wss://calamari.api.onfinality.io/public-ws',
    },
    typesBundle: 'calamari',
    batchSize: 100,
    // blockRange: {
    //     from: 7828270,
    // },
}

export default config
