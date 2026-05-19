import { useMutation } from "@tanstack/react-query";

export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Simulate network latency for the mock submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      if (!data.email.includes("@")) {
        throw new Error("Invalid email address");
      }
      if (data.message.length < 10) {
        throw new Error("Message is too short");
      }

      // Return a mock success response
      return { success: true, message: "Message sent successfully!" };
    }
  });
}
