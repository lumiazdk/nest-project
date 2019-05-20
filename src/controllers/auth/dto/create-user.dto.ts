import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, ValidationArguments } from 'class-validator';

export class CreateUserDto {
  @ApiModelProperty()
  @IsString({
    message: (args: ValidationArguments) => {
      if (args.value) {
        return 'Too short, minimum length is 1 character';
      } else {
        return 'Too short, minimum length is ' + ' characters';
      }
    },
  })
  readonly name: string;

  @ApiModelProperty()
  @IsString()
  readonly password: string;
}
