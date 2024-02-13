<?php

namespace Feature\Helper;

use App\Helpers\StringHelper;
use PHPUnit\Framework\TestCase;

class StringHelperTest extends TestCase
{
    /** @test */
    public function it_replaces_hyphens_with_spaces()
    {
        $inputString = 'hello-world';
        $expectedResult = 'hello world';

        $result = StringHelper::replaceHyphensWithSpaces($inputString);

        $this->assertEquals($expectedResult, $result);
    }

    /** @test */
    public function it_replaces_spaces_with_hyphens()
    {
        $inputString = 'hello world';
        $expectedResult = 'hello-world';

        $result = StringHelper::replaceSpacesWithHyphens($inputString);

        $this->assertEquals($expectedResult, $result);
    }
}
