FROM mcr.microsoft.com/playwright:v1.61.0-jammy

WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm ci

# 👇 Force install browsers to match Playwright version
RUN npx playwright install --with-deps

# Copy the rest of the project
COPY . .

CMD ["npx", "playwright", "test"]
