# Availability Splash Screen Module

This component serves as a layout wrapper that monitors the health of the API.

- When the API is unhealthy, a transitional splash screen appears, informing the user that the backend is restarting or booting up to handle their request. This introduces a slight delay but improves the user experience.
  - This is particularly useful when the backend is hosted on a free-tier instance, which may shut down after periods of inactivity.
- When the API is fully available, the splash screen simply shows as a brief flash. While not ideal, the minor flicker is outweighed by the overall reliability and smoother handling of downtime.
