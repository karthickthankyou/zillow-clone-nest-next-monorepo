import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from 'src/common/guards/auth/auth.guard'
import { Role } from '@zillow-org/types'

export const AllowAuthenticated = (...roles: Role[]) =>
  applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard))

export const AllowAuthenticatedOptional = (...roles: Role[]) =>
  applyDecorators(
    SetMetadata('allowUnauthenticated', true),
    SetMetadata('roles', roles),
    UseGuards(AuthGuard),
  )

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const context = GqlExecutionContext.create(ctx)
    const user = context.getContext().req.user
    return user
  },
)
