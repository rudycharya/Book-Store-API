"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const book_controller_1 = require("./book.controller");
describe('BookController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [book_controller_1.BookController],
        }).compile();
        controller = module.get(book_controller_1.BookController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=book.controller.spec.js.map