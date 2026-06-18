import { Router } from 'express';
import { submitEnquiry } from '../controllers/enquiryController';
import { validate } from '../middleware/validate';
import { enquirySchema } from '../schemas/enquirySchema';

const router = Router();

router.post('/enquiry', validate(enquirySchema), submitEnquiry);

export default router;