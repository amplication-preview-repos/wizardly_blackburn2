import { Module } from "@nestjs/common";
import { FreelancerModuleBase } from "./base/freelancer.module.base";
import { FreelancerService } from "./freelancer.service";
import { FreelancerController } from "./freelancer.controller";
import { FreelancerResolver } from "./freelancer.resolver";

@Module({
  imports: [FreelancerModuleBase],
  controllers: [FreelancerController],
  providers: [FreelancerService, FreelancerResolver],
  exports: [FreelancerService],
})
export class FreelancerModule {}
