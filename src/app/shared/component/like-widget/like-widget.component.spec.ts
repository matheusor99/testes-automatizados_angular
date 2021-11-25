import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {
    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent = null;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
        component = fixture.componentInstance;
    });

    it(`Shold create component`, () => {
        const component = fixture.componentInstance;

        expect(component).toBeTruthy();
    });

    it('Shold auto generate ID when id input property is missing', () => {
        fixture.detectChanges();
        expect(component.id).toBeTruthy();
    })

    it('Shold NOT generate ID when id input property is present', () => {
        const someId = 'someId';
        component.id = someId;
        fixture.detectChanges();
        expect(component.id).toBe('someId');
    })

    it(`#${LikeWidgetComponent.prototype.like.name} shold trigger emission when called`, () => {
        spyOn(component.liked, 'emit')
        fixture.detectChanges();
        component.like();
        expect(component.liked.emit).toHaveBeenCalled();
    });
});