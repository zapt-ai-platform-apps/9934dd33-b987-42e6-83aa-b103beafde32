# Create Event Integration

Integrate the `createEvent` function to interact with backend event processing.

## Usage

1. **Importing `createEvent`**:
   - Import `createEvent` from the Supabase client.
   ```javascript
   import { createEvent } from '../supabaseClient';
   ```

2. **Sending a ChatGPT Request**:
   - Use `createEvent` to send a chat request and handle the response.
   ```javascript
   const result = await createEvent('chatgpt_request', {
     prompt: 'Write a short, funny story about a comedian in markdown format',
     response_type: 'text'
   });
   ```

3. **Handling JSON Responses**:
   - Specify the schema in the prompt for structured data.
   ```javascript
   const result = await createEvent('chatgpt_request', {
     prompt: 'Give me a joke in JSON format with the following structure: { "setup": "joke setup", "punchline": "joke punchline" }',
     response_type: 'json'
   });
   ```

4. **Generating Images**:
   - Use `createEvent` to request image generation.
   ```javascript
   const result = await createEvent('generate_image', {
     prompt: 'A beautiful sunset over the ocean'
   });
   ```

5. **Text to Speech**:
   - Convert text to speech using `createEvent`.
   ```javascript
   const result = await createEvent('text_to_speech', {
     text: 'Hello, how are you today?'
   });
   ```

## Best Practices

- **Multiple Requests**:
  - Break down complex requests into multiple `createEvent` calls for better handling.

- **Error Handling**:
  - Always handle potential errors when making API calls.
  ```javascript
  try {
    const result = await createEvent('event_type', { /* data */ });
    // Handle result
  } catch (error) {
    console.error('Error:', error);
  }
  ```

- **Loading States**:
  - Implement loading indicators during asynchronous operations to enhance user experience.

- **Security**:
  - Do not expose sensitive API keys on the frontend. Use backend calls when necessary.