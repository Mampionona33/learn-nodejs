serve-backend:
	cd backend && yarn && yarn dev

serve-frontend:
	cd frontend && yarn && yarn start

migrate-database:
	cd backend && npx prisma migrate dev --name init