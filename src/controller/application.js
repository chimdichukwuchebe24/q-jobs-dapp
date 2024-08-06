import { Application } from "../models/application";
import { RollupStateHandler } from "../shared/rollup-state-handler";
import { jobStorage } from "../storage/job";

export class ApplicationController {
  async applyForJob(data) {
    if (!data.jobId || !data.applicant) {
      return await RollupStateHandler.handleReport({
        error: "Job ID and applicant address must be provided.",
      });
    }

    const jobListing = jobStorage.getOneById(data.jobId);

    if (!jobListing?.id) {
      return await RollupStateHandler.handleReport({
        error: `Job listing not found for id '${data.jobId}'`,
      });
    }

    return await RollupStateHandler.advanceWrapper(() => {
      const newApplication = new Application(data);
      jobListing.addApplication(newApplication);
      jobStorage.updateOne(jobListing);

      return {
        ok: true,
        message: "Application submitted successfully!",
        data: newApplication.getData(),
      };
    });
  }

  async getApplicationById(data) {
    const jobId = data[0];
    const jobListing = jobStorage.getOneById(jobId);

    if (!jobListing?.id)
      return await RollupStateHandler.handleReport({
        error: `Job listing not found for id '${jobId}'.`,
      });

    const applicationId = data[1];
    const application = jobListing.getApplicationById(applicationId);

    if (!application?.id)
      return await RollupStateHandler.handleReport({
        error: `Application not found for id '${applicationId}'.`,
      });

    return await RollupStateHandler.inspectWrapper(() => ({
      details: application,
    }));
  }
}
