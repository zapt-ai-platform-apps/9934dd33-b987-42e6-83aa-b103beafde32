# Electrical Intervention Manager

An Electrical Intervention Manager designed for maintenance electricians at universities to efficiently manage electrical interventions.

## User Journeys

1. [Sign In](docs/journeys/sign-in.md) - Authenticate using Supabase Auth.
2. [View Interventions](docs/journeys/view-interventions.md) - Browse existing electrical interventions.
3. [Create Intervention](docs/journeys/create-intervention.md) - Log a new electrical intervention.
4. [Update Intervention](docs/journeys/update-intervention.md) - Modify details of an existing intervention.
5. [Delete Intervention](docs/journeys/delete-intervention.md) - Remove an intervention from the list.

## External APIs

- **Supabase Auth**: Used for user authentication and managing user sessions.
- **Progressier**: Adds PWA functionality to the app.
- **Umami Analytics**: Tracks usage statistics for the app.

## Environment Variables

The app requires the following environment variables:

- `COCKROACH_DB_URL`: Connection string for the CockroachDB database.
- `NPM_TOKEN`: Token for accessing private NPM packages.
- `VITE_PUBLIC_APP_ID`: Identifier for the app.
- `VITE_PUBLIC_APP_ENV`: Environment setting (e.g., development, production).
- `VITE_PUBLIC_SENTRY_DSN`: DSN for Sentry error logging.
- `VITE_PUBLIC_UMAMI_WEBSITE_ID`: Website ID for Umami analytics.

Ensure these variables are set in the `.env` file.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the `.env` file with the required environment variables.
4. Run the development server with `npm run dev`.
5. Build the app for production using `npm run build`.
6. Deploy the app using Vercel.

For detailed instructions on each user journey, refer to the [User Journeys](#user-journeys) section.