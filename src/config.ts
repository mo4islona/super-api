/* eslint-disable sonarjs/no-duplicate-string */
import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: 'robonomics',
    prefix: 'robonomics',
    dataSource: {
        archive: 'https://robonomics.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://kusama.rpc.robonomics.network',
    },
    typesBundle: './typegen/typesBundle.json',
    batchSize: 100,
    // blockRange: {
    //     from: 7828270,
    // },
}

export default config
