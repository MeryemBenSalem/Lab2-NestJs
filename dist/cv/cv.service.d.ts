import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Repository } from 'typeorm';
import { Cv } from './entities/cv.entity';
export declare class CvService {
    private cvRepository;
    constructor(cvRepository: Repository<Cv>);
    create(createCvDto: CreateCvDto): Promise<Cv>;
    findAll(): Promise<Cv[]>;
    findOne(id: number): Promise<Cv>;
    update(id: number, updateCvDto: UpdateCvDto): Promise<Cv>;
    remove(id: number): Promise<Cv>;
    generateFakeCv(): Cv;
    seedCvs(count: number): Promise<Cv[]>;
}
