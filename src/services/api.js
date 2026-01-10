import { projectsData } from '../data/projects';
import { experienceData } from '../data/experience';
import { educationData } from '../data/education';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  fetchProjects: async () => {
    await delay(800); // Simulate network latency
    return projectsData;
  },
  
  fetchExperience: async () => {
    await delay(800);
    return experienceData;
  },

  fetchEducation: async () => {
    await delay(800);
    return educationData;
  },

  submitContactForm: async (formData) => {
    await delay(1500); // Simulate sending email
    // validate
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error("Please fill in all fields");
    }
    return { success: true, message: "Message sent successfully!" };
  }
};
