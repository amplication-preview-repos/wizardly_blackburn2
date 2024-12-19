import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FreelancerService } from "./freelancer.service";
import { FreelancerControllerBase } from "./base/freelancer.controller.base";

@swagger.ApiTags("freelancers")
@common.Controller("freelancers")
export class FreelancerController extends FreelancerControllerBase {
  constructor(protected readonly service: FreelancerService) {
    super(service);
  }
}
