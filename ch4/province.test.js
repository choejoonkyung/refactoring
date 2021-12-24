import {describe, it} from "mocha"
import {assert, expect} from "chai"
import Province from "./Province.js";

// 테스트를 위한 임시 데이터
const sampleProvinceData = () => ({
    name: 'Asia',
    producers: [
        { name: 'Byzzantium', cost: 10, production: 9 },
        { name: 'Attalia', cost: 12, production: 10 },
        { name: 'Sinope', cost: 10, production: 6 },
    ],
    demand: 30,
    price: 20,
})

// 생산 부족분 계산 테스트
describe("province test", ()=> {
    let asia;
    beforeEach(()=>{
       asia = new Province(sampleProvinceData())
    })

    it("shortfall", () =>{
        // 생산 부족분은 5로 기대 된다. 5면 테스트 성공 아니면 실패
        assert.equal(asia.shortfall, 5)
    })

    it("profit", () => {
        assert.equal(asia.profit, 230)
    })

    it("change production", () => {
        // 사용자가 직접 수정 할 경우(20으로 수정)
        asia.producers[0].production = 20;
        assert.equal(asia.profit, 292)
        assert.equal(asia.shortfall, -6)
    })

    it('zero demand', () => {
        // 수요가 없다,
        asia.demand = -1
        expect(asia.shortfall).equal(-26)
        expect(asia.profit).equal(-10)
    })

    it('empty string demand', () => {
        asia.demand = ''
        expect(asia.shortfall).NaN
        expect(asia.profit).NaN
    })
})

describe('no producers', () => {
    let noProducers
    beforeEach(() => {
        const data = { name: 'no producers', producers: [], demand: 30, price: 20 }
        noProducers = new Province(data)
    })
    it('shortfall', () => {
        expect(noProducers.shortfall).equal(30)
    })
    it('profit', () => {
        expect(noProducers.profit).equal(0)
    })
})

describe('string for producers', () => {
    it('', () => {
        const data = {
            name: 'String producers',
            producers: '',
            demand: 30,
            price: 20,
        }
        const prov = new Province(data)
        expect(prov.shortfall).equal(0)
    })
})