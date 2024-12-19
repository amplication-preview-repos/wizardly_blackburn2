import * as graphql from "@nestjs/graphql";
import { FreelancerResolverBase } from "./base/freelancer.resolver.base";
import { Freelancer } from "./base/Freelancer";
import { FreelancerService } from "./freelancer.service";

@graphql.Resolver(() => Freelancer)
export class FreelancerResolver extends FreelancerResolverBase {
  constructor(protected readonly service: FreelancerService) {
    super(service);
  }
}
