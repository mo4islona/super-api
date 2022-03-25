import { ProcessorConfig } from './types/custom/processorConfig'
import { lookupArchive } from '@subsquid/archive-registry'

const config: ProcessorConfig = {
    chainName: 'subsocial',
    prefix: 'subsocial',
    dataSource: {
        archive: lookupArchive('subsocial')[0].url,
        chain: 'wss://arch.subsocial.network',
    },
    typesBundle: './typegen/typesBundle.json',
    batchSize: 100,
    // blockRange: {
    //     from: 7828270,
    // },
}

export default config
