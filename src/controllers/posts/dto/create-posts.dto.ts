import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, ValidationArguments } from 'class-validator';

export class CreatePostsDto {
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
  readonly title: string;

  @ApiModelProperty()
  @IsString()
  readonly content: string;
}
