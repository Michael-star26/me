import { Component, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NzTabsModule, NzTabPosition } from 'ng-zorro-antd/tabs';
import { ActuarialTab } from './tabs/actuarial-tab/actuarial-tab';
import { BlogTab } from './tabs/blog-tab/blog-tab';
import { ContactTab } from './tabs/contact-tab/contact-tab';
import { CvTab } from './tabs/cv-tab/cv-tab';
import { ResearchTab } from './tabs/research-tab/research-tab';
import { SocialsTab } from './tabs/socials-tab/socials-tab';
import { SoftwareDev } from './tabs/software-dev/software-dev';
import { NzButtonModule } from 'ng-zorro-antd/button';

type Lang = 'en' | 'ko' | 'zh-CN';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

@Component({
  selector: 'app-welcome',
  imports: [
    NzTabsModule,
    SoftwareDev,
    ActuarialTab,
    BlogTab,
    ContactTab,
    CvTab,
    ResearchTab,
    SocialsTab,
    NzButtonModule
  ],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit {
  private platformId = inject(PLATFORM_ID);
  currentLang = signal<Lang>('en');

  ngOnInit(): void {
    // Only execute on client-side rendering
    if (isPlatformBrowser(this.platformId)) {
      this.initGoogleTranslate();
    }
  }

  private initGoogleTranslate(): void {
    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ko,zh-CN',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }

  setLang(lang: Lang): void {
    this.currentLang.set(lang);

    if (isPlatformBrowser(this.platformId)) {
      const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectEl) {
        selectEl.value = lang === 'en' ? '' : lang;
        selectEl.dispatchEvent(new Event('change'));
      }
    }
  }

}
