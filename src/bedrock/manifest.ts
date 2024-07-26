import { Vec3f } from "../utils";

export interface Manifest {
    format_version: 2,
    header: {
        description: string,
        name: string,
        uuid: string,
        version: Vec3f,
        min_engine_version: Vec3f
    },
    modules: {
        description: string,
        type: string,
        uuid: string,
        version: Vec3f
    }[]
}