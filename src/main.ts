import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppService } from './app.service'

async function bootstrap() {
  const appService = new AppService()

  const record = await appService.readParquet()
  console.log(record)

  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()
