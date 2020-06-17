import handlebars from 'handlebars';
import fs from 'fs';

import IParseMailTemplateDto from '../dtos/IParseMailTemplateDto';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDto): Promise<string> {
    const templateFilecontent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFilecontent);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
