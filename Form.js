import * as React from 'react';

export default function Form() {
    return (
        <section class="relative z-10 mt-10 overflow-hidden pt-20 pb-16 md:pb-20 
        lg:pt-[100px] lg:pb-28">
        <div container mx-auto >  
        <div className="flex flex-wrap">
        <div class="w-full">
        <div class="mx-auto max-w-full rounded-3xl bg-gradient-to-br from-pink-400 to-sky-200 p-6 px-10 dark:bg-gradient-to-br dark:from-pink-700 dark:to-sky-500/30 sm:max-w-[500px] sm:p-[60px]">
            
             <h3 className="mb-3 text-center text-lg font-bold text-black dark:text-white sm:text-2xl md:text-3xl">
              Welcome.
               <br/>
              <span className="text-base sm:text-xl">We exit to make learning easier.</span>
            </h3>

            <p className="md:text-md mb7 text-center text-xs font-semibold text-gray-700
            dark:text-white sm:mb-11 sm:text-sm">
                Create your account</p>

            <button class="dark:shadow-signUp mb-4 flex w-full items-center justify-center rounded-3xl bg-white py-2 px-5 text-sm font-medium 
            text-primary shadow-one dark:bg-white dark:text-black sm:mb-6 sm:py-3 sm:text-base">
                <span class="mr-3"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_95:967)"><path d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 
                13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216" fill="#4285F4">
                    </path><path d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 
                    15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001" fill="#34A853"></path>
                    <path d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z" fill="#FBBC05"></path><path d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z" fill="#EB4335"></path></g><defs><clipPath id="clip0_95:967"><rect width="20" height="20" fill="white"></rect>
                    </clipPath></defs></svg></span>Sign In with Google</button>

            <div class="mb-6 flex items-center justify-center">
                <span class="hidden h-[1px] w-full max-w-[50px] bg-body-color sm:block"></span>
                <p class=" md:text-md w-full px-5 text-center text-xs font-semibold  text-gray-700 dark:text-white sm:text-sm">
                    Or, Sign Up with email </p>
                   
                    <span class="hidden h-[1px] w-full max-w-[50px] bg-body-color sm:block">
                        </span>
            </div>

           {/* input fields */}
          <form className="md:text-md text-xs text-black dark:text-white sm:text-sm ">
            
                <div className="mb-3 sm:mb-6">
                    <label for="name" class="mb-3 block font-bold text-black dark:text-white">
                        Full Name
                        <span class="text-[red]">*</span>
                    </label>
                    <input
                        placeholder='Enter your full name' className="w-full dark:shadow-signUp border rounded-3xl py-2 px-5 text-body-color placeholder-body-color 
                        shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-white sm:border-transparent sm:py-3"
                         required type="text"/> 
                    
                </div>
                {/* country code and phone number */}

            <div class="flex w-full">

               <div class="mb-6 mr-2 w-28 flex-shrink-0 sm:mb-8">
               <label for="country-code" class="mb-3 block font-bold text-dark dark:text-white">
               Country Code 
               <span class="text-[red]">*</span>
               </label>
               <select id="country-code" name="country-code" class="w-full rounded-3xl border py-2 px-5 text-body-color placeholder-body-color shadow-one outline-none
                focus:border-primary focus-visible:shadow-none dark:bg-white sm:border-transparent sm:py-3" required="" value={'US +1'}>
                <option value="+247-AC">AC +247</option><option value="+376-AD">AD +376</option>
               <option value="+971-AE">AE +971</option><option value="+93-AF">AF +93</option>
               <option value="+1 268-AG">AG +1 268</option>
               <option value="+1 264-AI">AI +1 264</option><option value="undefined-AI">AI </option>
               <option value="+355-AL">AL +355</option><option value="+374-AM">AM +374</option>
               <option value="undefined-AN">AN </option><option value="+244-AO">AO +244</option><option value="+672-AQ">AQ +672</option><option value="+54-AR">AR +54</option><option value="+1 684-AS">AS +1 684</option><option value="+43-AT">AT +43</option><option value="+61-AU">AU +61</option>
               <option value="+297-AW">AW +297</option><option value="+358-AX">AX +358</option><option value="+994-AZ">AZ +994</option><option value="+387-BA">BA +387</option><option value="+1 246-BB">BB +1 246</option><option value="+880-BD">BD +880</option><option value="+32-BE">BE +32</option>
               <option value="+226-BF">BF +226</option><option value="+359-BG">BG +359</option><option value="+973-BH">BH +973</option><option value="+257-BI">BI +257</option><option value="+229-BJ">BJ +229</option><option value="+590-BL">BL +590</option><option value="+1 441-BM">BM +1 441</option>
               <option value="+673-BN">BN +673</option><option value="+591-BO">BO +591</option><option value="+599-BQ">BQ +599</option><option value="undefined-BQ">BQ </option><option value="+55-BR">BR +55</option><option value="+1 242-BS">BS +1 242</option><option value="+975-BT">BT +975</option>
               <option value="undefined-BU">BU </option><option value="undefined-BV">BV </option><option value="+267-BW">BW +267</option><option value="+375-BY">BY +375</option><option value="undefined-BY">BY </option><option value="+501-BZ">BZ +501</option><option value="+1-CA">CA +1</option><option value="+61-CC">CC +61</option><option value="+243-CD">CD +243</option><option value="+236-CF">CF +236</option><option value="+242-CG">CG +242</option>
               <option value="+41-CH">CH +41</option><option value="+225-CI">CI +225</option><option value="+682-CK">CK +682</option><option value="+56-CL">CL +56</option><option value="+237-CM">CM +237</option><option value="+86-CN">CN +86</option><option value="+57-CO">CO +57</option><option value="undefined-CP">CP </option><option value="+506-CR">CR +506</option><option value="undefined-CS">CS </option><option value="undefined-CS">CS </option><option value="undefined-CT">CT </option><option value="+53-CU">CU +53</option><option value="+238-CV">CV +238</option>
               <option value="+599-CW">CW +599</option><option value="+61-CX">CX +61</option><option value="+357-CY">CY +357</option><option value="+420-CZ">CZ +420</option><option value="undefined-DD">DD </option><option value="+49-DE">DE +49</option><option value="undefined-DG">DG </option><option value="+253-DJ">DJ +253</option><option value="+45-DK">DK +45</option><option value="+1 767-DM">DM +1 767</option><option value="+1 809-DO">DO +1 809</option><option value="undefined-DY">DY </option><option value="+213-DZ">DZ +213</option><option value="undefined-EA">EA </option><option value="+593-EC">EC +593</option>
               <option value="+372-EE">EE +372</option><option value="+20-EG">EG +20</option><option value="+212-EH">EH +212</option><option value="+291-ER">ER +291</option><option value="+34-ES">ES +34</option><option value="+251-ET">ET +251</option><option value="+388-EU">EU +388</option><option value="+358-FI">FI +358</option><option value="+679-FJ">FJ +679</option><option value="+500-FK">FK +500</option><option value="+691-FM">FM +691</option><option value="+298-FO">FO +298</option><option value="undefined-FQ">FQ </option><option value="+33-FR">FR +33</option><option value="+241-FX">FX +241</option><option value="+241-GA">GA +241</option><option value="+44-GB">GB +44</option><option value="+473-GD">GD +473</option><option value="+995-GE">GE +995</option><option value="undefined-GE">GE </option>
               <option value="+594-GF">GF +594</option><option value="+44-GG">GG +44</option><option value="+233-GH">GH +233</option><option value="+350-GI">GI +350</option><option value="+299-GL">GL +299</option><option value="+220-GM">GM +220</option><option value="+224-GN">GN +224</option><option value="+590-GP">GP +590</option><option value="+240-GQ">GQ +240</option><option value="+30-GR">GR +30</option><option value="undefined-GS">GS </option><option value="+502-GT">GT +502</option><option value="+1 671-GU">GU +1 671</option><option value="+245-GW">GW +245</option><option value="+592-GY">GY +592</option><option value="+852-HK">HK +852</option><option value="undefined-HM">HM </option><option value="+504-HN">HN +504</option><option value="+385-HR">HR +385</option><option value="+509-HT">HT +509</option><option value="+36-HU">HU +36</option><option value="undefined-HV">HV </option><option value="undefined-IC">IC </option><option value="+62-ID">ID +62</option><option value="+353-IE">IE +353</option><option value="+972-IL">IL +972</option>
               <option value="+44-IM">IM +44</option><option value="+91-IN">IN +91</option><option value="+246-IO">IO +246</option><option value="+964-IQ">IQ +964</option><option value="+98-IR">IR +98</option><option value="+354-IS">IS +354</option><option value="+39-IT">IT +39</option><option value="+44-JE">JE +44</option><option value="+1 876-JM">JM +1 876</option><option value="+962-JO">JO +962</option><option value="+81-JP">JP +81</option><option value="undefined-JT">JT </option><option value="+254-KE">KE +254</option><option value="+996-KG">KG +996</option><option value="+855-KH">KH +855</option><option value="+686-KI">KI +686</option><option value="+269-KM">KM +269</option><option value="+1 869-KN">KN +1 869</option><option value="+850-KP">KP +850</option><option value="+82-KR">KR +82</option><option value="+965-KW">KW +965</option><option value="+1 345-KY">KY +1 345</option><option value="+7-KZ">KZ +7</option><option value="+856-LA">LA +856</option><option value="+961-LB">LB +961</option><option value="+1 758-LC">LC +1 758</option><option value="+423-LI">LI +423</option><option value="+94-LK">LK +94</option><option value="+231-LR">LR +231</option><option value="+266-LS">LS +266</option><option value="+370-LT">LT +370</option><option value="+352-LU">LU +352</option><option value="+371-LV">LV +371</option><option value="+218-LY">LY +218</option><option value="+212-MA">MA +212</option>
               <option value="+377-MC">MC +377</option><option value="+373-MD">MD +373</option><option value="+382-ME">ME +382</option><option value="+590-MF">MF +590</option><option value="+261-MG">MG +261</option><option value="+692-MH">MH +692</option><option value="undefined-MI">MI </option><option value="+389-MK">MK +389</option><option value="+223-ML">ML +223</option><option value="+95-MM">MM +95</option><option value="+976-MN">MN +976</option><option value="+853-MO">MO +853</option><option value="+1 670-MP">MP +1 670</option><option value="+596-MQ">MQ +596</option><option value="+222-MR">MR +222</option><option value="+1 664-MS">MS +1 664</option><option value="+356-MT">MT +356</option><option value="+230-MU">MU +230</option><option value="+960-MV">MV +960</option><option value="+265-MW">MW +265</option><option value="+52-MX">MX +52</option><option value="+60-MY">MY +60</option><option value="+258-MZ">MZ +258</option><option value="+264-NA">NA +264</option><option value="+687-NC">NC +687</option><option value="+227-NE">NE +227</option><option value="+672-NF">NF +672</option><option value="+234-NG">NG +234</option><option value="undefined-NH">NH </option><option value="+505-NI">NI +505</option><option value="+31-NL">NL +31</option><option value="+47-NO">NO +47</option><option value="+977-NP">NP +977</option><option value="undefined-NQ">NQ </option><option value="+674-NR">NR +674</option><option value="undefined-NT">NT </option><option value="+683-NU">NU +683</option><option value="+64-NZ">NZ +64</option><option value="+968-OM">OM +968</option><option value="+507-PA">PA +507</option><option value="undefined-PC">PC </option><option value="+51-PE">PE +51</option><option value="+689-PF">PF +689</option><option value="+675-PG">PG +675</option><option value="+63-PH">PH +63</option><option value="+92-PK">PK +92</option><option value="+48-PL">PL +48</option><option value="+508-PM">PM +508</option><option value="+872-PN">PN +872</option>
               <option value="+1 787-PR">PR +1 787</option><option value="+970-PS">PS +970</option><option value="+351-PT">PT +351</option><option value="undefined-PU">PU </option><option value="+680-PW">PW +680</option><option value="+595-PY">PY +595</option><option value="undefined-PZ">PZ </option><option value="+974-QA">QA +974</option><option value="+262-RE">RE +262</option><option value="undefined-RH">RH </option><option value="+40-RO">RO +40</option><option value="+381-RS">RS +381</option><option value="+7-RU">RU +7</option>
               <option value="+250-RW">RW +250</option><option value="+966-SA">SA +966</option><option value="+677-SB">SB +677</option><option value="+248-SC">SC +248</option><option value="+249-SD">SD +249</option><option value="+46-SE">SE +46</option><option value="+65-SG">SG +65</option><option value="+290-SH">SH +290</option><option value="+386-SI">SI +386</option><option value="+47-SJ">SJ +47</option><option value="+421-SK">SK +421</option><option value="undefined-SK">SK </option><option value="+232-SL">SL +232</option><option value="+378-SM">SM +378</option><option value="+221-SN">SN +221</option><option value="+252-SO">SO +252</option><option value="+597-SR">SR +597</option><option value="+211-SS">SS +211</option><option value="+239-ST">ST +239</option><option value="undefined-SU">SU </option><option value="+503-SV">SV +503</option>
               <option value="+1 721-SX">SX +1 721</option><option value="+963-SY">SY +963</option><option value="+268-SZ">SZ +268</option><option value="+290-TA">TA +290</option><option value="+1 649-TC">TC +1 649</option><option value="+235-TD">TD +235</option><option value="undefined-TF">TF </option><option value="+228-TG">TG +228</option><option value="+66-TH">TH +66</option><option value="+992-TJ">TJ +992</option><option value="+690-TK">TK +690</option><option value="+670-TL">TL +670</option><option value="+993-TM">TM +993</option><option value="+216-TN">TN +216</option><option value="+676-TO">TO +676</option><option value="undefined-TP">TP </option><option value="+90-TR">TR +90</option><option value="+1 868-TT">TT +1 868</option><option value="+688-TV">TV +688</option><option value="+886-TW">TW +886</option><option value="+255-TZ">TZ +255</option><option value="+380-UA">UA +380</option><option value="+256-UG">UG +256</option><option value="undefined-UK">UK </option><option value="+1-UM">UM +1</option><option value="+1-US">US +1</option><option value="+598-UY">UY +598</option><option value="+998-UZ">UZ +998</option><option value="+379-VA">VA +379</option><option value="+1 784-VC">VC +1 784</option><option value="undefined-VD">VD </option><option value="+58-VE">VE +58</option><option value="+1 284-VG">VG +1 284</option><option value="+1 340-VI">VI +1 340</option><option value="+84-VN">VN +84</option><option value="+678-VU">VU +678</option><option value="+681-WF">WF +681</option><option value="undefined-WK">WK </option><option value="+685-WS">WS +685</option><option value="+383-XK">XK +383</option><option value="undefined-YD">YD </option>
               <option value="+967-YE">YE +967</option><option value="+262-YT">YT +262</option><option value="undefined-YU">YU </option><option value="+27-ZA">ZA +27</option><option value="+260-ZM">ZM +260</option><option value="undefined-ZR">ZR </option><option value="+263-ZW">ZW +263</option></select>
             </div>
               

               <div class="mb-3 flex-grow sm:mb-6">
                <label for="phone" class="mb-3 block font-bold text-dark dark:text-white">Phone <span class="text-[red]">*</span></label>
                <input id="phone" placeholder="Enter your Phone Number" class="w-full rounded-3xl border py-2 px-5 text-body-color  placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-white sm:py-3" required="" pattern="\d{9,13}" title="Please enter a valid phone number with 9 to 13 digits" type="tel" value="" name="phone" />
               </div>
         </div>


                {/* Email */}
                <div className="mb-3 sm:mb-6">
                    <label for="email" class="mb-3 block font-bold text-black dark:text-white">
                        Email Address
                        <span class="text-[red]">*</span>
                        </label>
                    <input
                        className="w-full dark:shadow-signUp border rounded-3xl py-2 px-5 text-body-color placeholder-body-color 
                        shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-white sm:border-transparent sm:py-3"
                         required type="text" 
                        placeholder='Enter your email'
                    />
                </div>
                <div className="mb-3 sm:mb-6">
                    <label for="password" class="mb-3 block font-bold text-black dark:text-white">
                        Password
                        <span class="text-[red]">*</span>
                        </label>
                    <input
                       className="w-full dark:shadow-signUp border rounded-3xl py-2 px-5 text-body-color placeholder-body-color 
                       shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-white sm:border-transparent sm:py-3"
                        required  
                        placeholder='Enter your password'
                        type='password'
                    />
                </div>

                <div className="mb-3 sm:mb-6">
                    <label for="address" class="mb-3 block font-bold text-black dark:text-white">
                        Address
                        <span class="text-[red]">*</span>
                        </label>
                    <input
                       className="w-full dark:shadow-signUp border rounded-3xl py-2 px-5 text-body-color placeholder-body-color 
                       shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-white sm:border-transparent sm:py-3"
                        required type="text" 
                        placeholder='Enter your address' />
                   
                </div>

                {/* Zip code */}
                <div className="mb-3 sm:mb-6">
                    <label for="zip" class="mb-3 block font-bold text-black dark:text-white">
                        Zip
                        <span class="text-[red]">*</span>
                        </label>
                    <input
                       className="w-full dark:shadow-signUp border rounded-3xl py-2 px-5 text-body-color placeholder-body-color 
                       shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-white sm:border-transparent sm:py-3"
                        required type="text" 
                        placeholder='Enter your Zip code' />
                   
                    
                </div>
                
                <div class="mb-8 flex flex-col items-center sm:flex-row">
                    <div class="w-full"><input id="checkboxLabelOne" class="mr-1" required="" type="checkbox"/>
                    <label for="checkboxLabelOne" class=" font-bold text-black dark:text-white"> I accept the 
                        <a href="../privacy-policy" class="hover:underline">Privacy Policy</a> . </label>
                    </div>
                </div>

                <button type="submit" class="hover:shadow-signUp ext-sm flex w-full items-center justify-center 
                rounded-3xl bg-blue-900 py-2 px-6 font-medium text-white transition  duration-300 ease-in-out hover:bg-opacity-80 
                sm:py-3 sm:text-base ">Register</button>
   
             </form>

             <p class="md:text-md  mt-4  text-center text-xs font-semibold text-black dark:text-white sm:text-sm">Already have An Account? 
                <a class="md:text-md text-xs font-extrabold text-blue-400
                 hover:underline  sm:text-sm" href="/login">Login</a>
            </p>
                  
    </div>
    </div>
  </div>              
</div>   
</section>  
)
}
                      
                   
                    
         
                
