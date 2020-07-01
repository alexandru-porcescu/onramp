<?php

namespace App\Preferences;

use App\Localization\Locale;

class LocalePreference extends Preference
{
    public function options()
    {
        return (new Locale)->all();
    }

    public function default()
    {
        return 'en';
    }
}
