import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
    success(value, message = '成功') {
        return {
            code: 1,
            result: {
                ...value
            },
            message: message
        }
    }
    error(message = '失败') {
        return {
            code: 0,
            message: message
        }
    }
    jsonErrors(value, message = '数据验证失败') {
        return {
            code: -104,
            result: {
                ...value
            },
            message: message
        }
    }
}
