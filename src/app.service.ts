import { Injectable } from '@nestjs/common'
import { ParquetReader } from 'parquetjs-lite'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  readParquet = async (): Promise<Object> => {
    const reader = await ParquetReader.openFile(
      './parquet_folder/part-00005-9eea4342-0286-4e4b-8823-45346bb0db22-c000.snappy.parquet',
    )

    const cursor = reader.getCursor()
    const record = await cursor.next()

    await reader.close()

    return record
  }
}
