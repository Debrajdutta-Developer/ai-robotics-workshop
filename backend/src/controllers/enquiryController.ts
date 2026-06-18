import { Request, Response } from 'express';
import { EnquiryInput } from '../schemas/enquirySchema';

export const submitEnquiry = async (req: Request<{}, {}, EnquiryInput>, res: Response) => {
  try {
    const { name, email, phone } = req.body;

    // Logic to save to DB would go here. Mocking success for now.
    console.log('Enquiry Received:', { name, email, phone });

    return res.status(201).json({
      success: true,
      message: `Thank you, ${name}! Your enquiry for the AI & Robotics workshop has been received.`,
    });
  } catch (error) {
    throw error;
  }
};