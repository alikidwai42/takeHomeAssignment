/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';

@Controller('response')
export class ResponseController {
  @Post("/res")
  receiveInput(@Body() userInput: { input: string }): string {
    // Logic for processing user input and generating a response
    const response = this.generateResponse(userInput.input);
    return response;
  }

  private generateResponse(input: string): string {
    const lowerCaseInput = input.toLowerCase();
  
    if (lowerCaseInput.includes('hello')) {
      return 'Hello there!';
    } else if (lowerCaseInput.includes('how are you')) {
      return 'I am doing well, thank you!';
    } else if (lowerCaseInput.includes('good morning')) {
      return 'Good morning! Have a great day!';
    } else if (lowerCaseInput.includes('good night')) {
      return 'Good night! Sleep well!';
    } else if (lowerCaseInput.includes('thank you')) {
      return 'You\'re welcome!';
    } else {
      return 'I did not understand that.';
    }
  }
}
