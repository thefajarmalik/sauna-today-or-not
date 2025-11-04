FROM public.ecr.aws/lambda/nodejs:20

# Copy code
COPY . ${LAMBDA_TASK_ROOT}

# Install dependencies
RUN npm ci

# Build TypeScript
RUN npm run build || npx tsc

# Set the handler (file "dist/server.handler")
CMD ["dist/server.handler"]
