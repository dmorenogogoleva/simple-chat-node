import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AppGateway } from "./app/app.gateway";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Chat } from "./chat.entity";

@Module({
  controllers: [AppController],
  providers: [AppService, AppGateway],
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      username: "<USERNAME>", // should be my username?????
      password: "<PASSWORD>",
      database: "chat",
      entities: [Chat],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Chat]),
  ],
})
export class AppModule {}
