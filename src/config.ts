import { ProcessorConfig } from './types/custom/processorConfig'
import { lookupArchive } from '@subsquid/archive-registry'

const config: ProcessorConfig = {
    chainName: 'quartz',
    prefix: 'quartz',
    dataSource: {
        archive: lookupArchive('quartz')[0].url,
        chain: 'wss://quartz.unique.network',
    },
    typesBundle: 'quartz',
    batchSize: 100,
    // blockRange: {
    //     from: 7828270,
    // },
}

export default config
